import React, { FC, ImgHTMLAttributes, useState } from 'react';

declare type LazyImageConfig = {
	ssr: boolean;
	// loader?: Function,
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

export const LazyImage: FC<LazyImageProps> = ({
	src,
	height = 200,
	width = 200,
	alt,
	style = {},
	...props
}: LazyImageProps): JSX.Element => {
	const config = {
		...defaultConfig,
		...(props?.config || {}),
	};

	const [isLoaded, setIsLoaded] = useState<boolean>(config?.ssr && typeof window === 'undefined');

	const handleOnLoad = () => setIsLoaded(true);

	const loaderStyle = {
		padding: '15px',
		background:
			'linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%)',
		backgroundSize: '800px 100px',
		animation: 'wave-squares 2s infinite ease-out',
	};

	return (
		<>
			{!isLoaded && (
				<div style={{ ...loaderStyle, height, width }}>
					<style>
						{`@keyframes wave-squares {
                    0% {
                        background-position: left;
                    }
                     100% {
                        background-position: right;
                    }
                }`}
					</style>
				</div>
			)}
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
