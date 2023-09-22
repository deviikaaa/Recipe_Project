import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      <h1>Recipes</h1>
      <div id="idk">
      <div className="rechead">
        <h3 class="recchead">Chicken Biriyani</h3>
        <div>
            <h5>Ingredients:</h5>
            <p>
           

                <ul>
<li>1 cup basmati rice</li>
<li>250g chicken pieces</li>
<li>1 onion, sliced</li>
<li>2 tomatoes, chopped</li>
<li>2 tbsp biryani masala</li>
<li>1 tsp each of ginger and garlic paste</li>
</ul>
<ul>
<li>1/2 cup plain yogurt</li>
<li>2 tbsp oil or ghee</li>
<li>Salt to taste</li>
<li>Fresh mint and coriander leaves</li>
</ul>

<h4>Steps:</h4>
Soak rice for 30 mins. Cook until 70% done, then drain.
Sauté onions, ginger-garlic paste, add tomatoes.
Add chicken, biryani masala, yogurt, mint, coriander, salt. Cook 10-15 mins.
Layer chicken and partially cooked rice, top with saffron milk.
Cook covered on low heat for 15-20 mins.
Let sit 10 mins, then fluff and serve.
Enjoy your Chicken Biryani!</p>
<img
              src="https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg"
              className="img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
      
      </div>
      </div>
      <div className="rechead">
        <h3 class="recchead">Alfredo Pasta</h3>
        <div>
            <h5>Ingredients:</h5>
            <p>
               
<li>200g fettuccine pasta</li>
<li>1/2 cup heavy cream</li>
<li>1/2 cup grated Parmesan cheese</li>
<li>2 tbsp butter</li>
<li>2 cloves garlic, minced</li>
<li>Salt and pepper, to taste</li>


<h4>Steps:</h4>
Cook fettuccine pasta according to package instructions. Drain.
In a pan, melt butter and sauté minced garlic.
Pour in heavy cream, bring to a simmer.
Add grated Parmesan, stir until creamy.
Season with salt and pepper.
Toss cooked pasta in Alfredo sauce.
Garnish with chopped parsley.

Enjoy your Alfredo Pasta!</p>

<img
              src="https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-V3.jpg"
              className="img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
      
      </div>
      </div>

      <div className="rechead">
        <h3 class="recchead">Fried Rice</h3>
        <div>
            <h5>Ingredients:</h5>
            <p>
           

                <ul>
<li>Cooked Rice</li>
<li>Oil: Typically vegetable or sesame oil.</li>
<li>Vegetables: Use a mix of diced vegetables like carrots, peas, bell peppers, and onions</li>
<li>Soy Sauce: For seasoning and flavor.</li>
<li>Salt and Pepper: To taste.</li>
<li>Optional Seasonings: Additions like oyster sauce, sesame seeds, or chili flakes for extra flavor.</li>
</ul>


<h4>Steps:</h4>
To prepare fried rice, first, heat oil in a skillet or wok. Add protein and cook until browned. Set it aside. Sauté garlic, ginger, and vegetables. Add cold rice, soy sauce, and seasoning. Stir-fry until heated through. Return protein, add green onions, and mix. Garnish with herbs, and it's ready!</p>
<img
              src="data:image/jpeg;base64,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"
              className="img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
      
      </div>
      </div>

      <div className="rechead">
        <h3 class="recchead">Cheesecake</h3>
        <div>
            <h5>Ingredients:</h5>
            <p>
           

                <ul>
<li>1 1/2 cups graham cracker crumbs</li>
<li>1/4 cup granulated sugar</li>
<li>1/2 cup unsalted butter, melted</li>
<li>4 packages (8 ounces each) cream cheese, softened</li>
<li>1 1/4 cups granulated sugar</li>
<li>1 teaspoon vanilla extract</li>
</ul>


<h4>Steps:</h4>
To make a classic cheesecake, first, create the graham cracker crust by combining crumbs, sugar, and melted butter. Press this mixture into a 9-inch springform pan. In a separate bowl, beat cream cheese, sugar, and vanilla until smooth. Add eggs one at a time. Pour this mixture over the crust and bake at 325°F (163°C) for 45-50 minutes. Once cooled and refrigerated, top with fruit or other toppings of your choice before serving. Enjoy your cheesecake!</p>
<img
              src="data:image/jpeg;base64,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"
              className="img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
      
      </div>
      </div>
      </div>
     
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};