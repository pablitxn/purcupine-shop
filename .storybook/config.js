import { configure, addDecorator, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { create } from "@storybook/theming";
import { withKnobs } from "@storybook/addon-knobs";

const theme = create({
	base: "dark",
	// brandImage: LOGO,
	brandTitle: "purcupine-shop",
	// url: "",
	fontBase: 'Rubik, "Rubik Medium"',
});

addParameters({
	options: { theme },
	docs: {
		container: DocsContainer,
		page: DocsPage,
	},
});

addDecorator(withKnobs);

// function loadStories() {
// 	return [
// 		// Ensure we load Welcome First
// 		require.context("../docs", true, /Intro.story.mdx/),
// 		require.context("../docs", true, /Colores.story.mdx/),
// 		require.context("../docs", true, /Tipografias.story.mdx/),
// 	];
// }

// configure(loadStories(), module);
