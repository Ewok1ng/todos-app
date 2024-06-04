export type Styles = {
	container: string;
	controls: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
