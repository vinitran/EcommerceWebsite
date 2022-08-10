import React, { useState,useEffect } from 'react'
import { ProductItem } from './ProductItem'
import headphone_card from '../data/headphone_data.js'
import smartphone_card from '../data/smartphone_data.js'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export const Products = () => {
  const [currentpage, setCurrentpage] = useState('1');
  const [list, setList] = useState(smartphone_card);
  const radios = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
  ];
  useEffect(() => {
    if(currentpage !=1) {
      setList(headphone_card);

    }
  }, [currentpage]);
  return (
    <div className="container mb-5">
      <div className="row">
        {
          list.map((product) =>
            <div className="col-md-4 col-sm-6 col-lg-3" >
              <ProductItem key={product.id} product={list[product.id - 1]} />
            </div>
          )
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={'dark'}
              name="radio"
              value={radio.value}
              checked={currentpage === radio.value}
              onChange={(e) => setCurrentpage(e.currentTarget.value)}
            >
              {radio.value}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  )
}
