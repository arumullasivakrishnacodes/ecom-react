import React from 'react';
import '../PlpFilters/PlpFilters.css'

const PlpFilters = () => {

    // document.getElementById('custom-checkbox-list').addEventListener('click', function() {
    //     this.classList.toggle('checked');
    // });

    const handleCheck = (e) => {
        e.target.classList.toggle('checked');
    }


  return (
    <div className='plp-filters-section-con'>
        <div class="accordion" id="accordionExample">

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Category
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className="custom-checkbox-list" id="custom-checkbox-list" onClick={handleCheck}>
                            <li>Shirts</li>
                            <li>T - Shirts</li>
                            <li>Footwear</li>
                            <li>Watches</li>
                            <li>Electronics</li>
                            <li>Furniture</li>
                            <li>Geans</li>
                            <li>Modern Wear</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Material
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className="custom-checkbox-list" id="custom-checkbox-list" onClick={handleCheck}>
                            <li>Cotton</li>
                            <li>Silk</li>
                            <li>Leather</li>
                            <li>Canvas</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Size
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className="custom-checkbox-list" id="custom-checkbox-list" onClick={handleCheck}>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>XL</li>
                            <li>XXL</li>
                            <li>XXXL</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Colour
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className="custom-checkbox-list" id="custom-checkbox-list" onClick={handleCheck}>
                            <li>Black</li>
                            <li>White</li>
                            <li>Olive Greeen</li>
                            <li>Red</li>
                            <li>Beige</li>
                            <li>Yellow</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Brand
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className="custom-checkbox-list" id="custom-checkbox-list" onClick={handleCheck}>
                            <li>Allensolly</li>
                            <li>Addidas</li>
                            <li>Balmain</li>
                            <li>Nike</li>
                            <li>Armani</li>
                            <li>Denim</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Price Range
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        Discount Range
                    </button>
                </h2>
                <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className="custom-checkbox-list" id="custom-checkbox-list" onClick={handleCheck}>
                            <li>30%</li>
                            <li>40%</li>
                            <li>50%</li>
                            <li>60%</li>
                            <li>70%</li>
                            <li>80%</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default PlpFilters