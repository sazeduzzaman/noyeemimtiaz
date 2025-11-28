(function ($) {
  "use strict";

  $(document).ready(function () {

    // -----------------------
    // Portfolio Grid (with filters)
    // -----------------------
    (function () {
      var $portfolio = $(".grid"); // Portfolio grid

      $portfolio.imagesLoaded(function () {
        var iso = $portfolio.isotope({
          itemSelector: ".grid-item",
          percentPosition: true,
          layoutMode: "masonry",
          columnWidth: ".grid-sizer",
          transitionDuration: "700ms"
        }).data("isotope");

        var initShow = 15,
            loadMoreCount = 3,
            showingItems = initShow;

        function hideExtraItems() {
          $portfolio.find(".grid-item").removeClass("hidden");
          var visibleItems = $portfolio.isotope("getFilteredItemElements");
          var hiddenElems = Array.prototype.slice.call(visibleItems, showingItems);
          $(hiddenElems).addClass("hidden");
          $portfolio.isotope("layout");

          if (visibleItems.length <= initShow) $("#load-more").hide();
          else {
            $("#load-more").show();
            $("#load-more").text(showingItems >= visibleItems.length ? "Collapse All" : "Load More");
          }
        }

        // Initial hide
        hideExtraItems();

        // Add Load More button for portfolio if not exists
        if ($("#load-more").length === 0) {
          $portfolio.after('<div class="text-center mt-4"><button id="load-more" class="btn btn-dark">Load More</button></div>');
        }

        // Load More / Collapse button click
        $("#load-more").off("click").on("click", function () {
          var visibleItems = $portfolio.isotope("getFilteredItemElements");
          if (showingItems >= visibleItems.length) showingItems = initShow;
          else {
            showingItems += loadMoreCount;
            if (showingItems > visibleItems.length) showingItems = visibleItems.length;
          }
          hideExtraItems();
        });

        // Portfolio filter buttons
        $(".filters-button-group .button").on("click", function () {
          var filterValue = $(this).attr("data-filter");
          $portfolio.isotope({ filter: filterValue });
          showingItems = initShow;
          $(this).siblings().removeClass("is-checked");
          $(this).addClass("is-checked");
          hideExtraItems();
        });
      });
    })();

    // -----------------------
    // Gallery Grid (no filters)
    // -----------------------
    (function () {
      var $gallery = $(".gallery-grid"); // Gallery grid

      $gallery.imagesLoaded(function () {
        var iso = $gallery.isotope({
          itemSelector: ".grid-item",
          percentPosition: true,
          layoutMode: "masonry",
          columnWidth: ".grid-sizer",
          transitionDuration: "700ms"
        }).data("isotope");

        var initShow = 9,
            loadMoreCount = 3,
            showingItems = initShow;

        function hideExtraItems() {
          $gallery.find(".grid-item").removeClass("hidden");
          var visibleItems = $gallery.isotope("getFilteredItemElements");
          var hiddenElems = Array.prototype.slice.call(visibleItems, showingItems);
          $(hiddenElems).addClass("hidden");
          $gallery.isotope("layout");

          if (visibleItems.length <= initShow) $("#gallery-load-more").hide();
          else {
            $("#gallery-load-more").show();
            $("#gallery-load-more").text(showingItems >= visibleItems.length ? "Collapse All" : "Load More");
          }
        }

        // Initial hide
        hideExtraItems();

        // Add Load More button for gallery if not exists
        if ($("#gallery-load-more").length === 0) {
          $gallery.after('<div class="text-center mt-4"><button id="gallery-load-more" class="btn btn-dark">Load More</button></div>');
        }

        // Load More / Collapse button click
        $("#gallery-load-more").off("click").on("click", function () {
          var visibleItems = $gallery.isotope("getFilteredItemElements");
          if (showingItems >= visibleItems.length) showingItems = initShow;
          else {
            showingItems += loadMoreCount;
            if (showingItems > visibleItems.length) showingItems = visibleItems.length;
          }
          hideExtraItems();
        });
      });
    })();

  });
})(jQuery);
