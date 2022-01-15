import React, { FC, ImgHTMLAttributes, useState } from 'react';
import './loader.css';

declare type LazyImageConfig = {
	ssr: boolean;
};

const defaultConfig: LazyImageConfig = {
	ssr: false,
};

export declare interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	config?: Partial<LazyImageConfig>;
}

export const overRideConfig = (config: Partial<LazyImageConfig>): void => {
	if (typeof config.ssr === 'boolean') defaultConfig.ssr = config.ssr;
};

const LazyImage: FC<LazyImageProps> = ({
	src,
	height = 200,
	width = 200,
	alt = 'N/A',
	style = {},
	...props
}: LazyImageProps): JSX.Element => {
	const config = {
		...defaultConfig,
		...(props?.config || {}),
	};

	const [isLoaded, setIsLoaded] = useState<boolean>(config?.ssr && typeof window === 'undefined');

	const handleOnLoad = () => setIsLoaded(true);

	return (
		<>
			{!isLoaded && <div className="web-loader" style={{ height, width }} />}
			<img
				onLoad={handleOnLoad}
				style={{ ...style, ...(isLoaded ? {} : { display: 'none' }) }}
				src={src}
				alt={alt}
				loading={!isLoaded ? undefined : 'lazy'}
				height={height}
				width={width}
				{...props}
			/>
		</>
	);
};

export default LazyImage;
