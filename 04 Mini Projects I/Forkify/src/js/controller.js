import * as model from "./model";

import "core-js/stable";
import "regenerator-runtime/runtime";
import recipeView from "./views/recipeView";

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1. loading recipe
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

// window.addEventListener("hashchange", controlRecipes);
// window.addEventListener("load", controlRecipes);
["load", "hashchange"].forEach((event) => {
  window.addEventListener(event, controlRecipes);
});
