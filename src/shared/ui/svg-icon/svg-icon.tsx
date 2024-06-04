import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
	name: string;
	prefix?: string;
	color?: `#${number | string}`;
}

export const SvgIcon = ({ name, prefix = 'icon', color, ...props }: Props) => {
	const symbolId = `#${prefix}-${name}`;

	return (
		<svg {...props} aria-hidden="true">
			<use href={symbolId} fill={color} />
		</svg>
	);
};
