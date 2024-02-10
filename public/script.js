document
  .getElementById("viewCatalogsBtn")
  .addEventListener("click", async function () {
    try {
      const response = await fetch("https://localhost:4000/api/catelogs/");
      const catalogs = await response.json();
      console.log(catalogs);

      // Open a new window
      const catalogsWindow = window.open("", "_blank");

      // Display catalogs in the new window
      catalogs.forEach((catalog) => {
        const catalogTile = document.createElement("button");
        catalogTile.classList.add("catalog-tile");
        catalogTile.innerText = catalog.catalogName;

        // Attach click event to each catalog tile
        catalogTile.addEventListener("click", function () {
          // You can add more logic here to display details or navigate to a specific catalog
          console.log(`Clicked on catalog: ${catalog.catalogName}`);
        });

        catalogsWindow.document.body.appendChild(catalogTile);
      });
    } catch (error) {
      console.error("Error fetching catalogs:", error);
    }
  });
