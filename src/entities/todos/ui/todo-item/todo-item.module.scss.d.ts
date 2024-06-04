export type Styles = {
	active: string;
	container: string;
	item: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
