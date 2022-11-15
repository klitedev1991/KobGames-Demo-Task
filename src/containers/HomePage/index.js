import React, { useState } from 'react';

import Card from '../../components/Card';
import Item from '../../components/Item';
import ItemGroup from '../../components/ItemGroup';
import Content from '../../components/Content';
import Group from '../../components/Group';
import DropDown from '../../components/DropDown';
import CompWrapper from '../../components/CompWrapper';
import H3 from '../../components/H3';

import { cards, items } from '../../contants/variable';
import Spin from '../../components/Spin';

const HomePage = (props) => {
  // const [isLessMode, setIsLessMode] = useState(false);
  // const [btnDataOfCard, setBtnDataOfCard] = useState();

  const [chainType, setChainType] = useState('SOL');
  const [chainQuantity, setChainQuantity] = useState('100X');

  const chainTypeArr = ['SOL', 'DUST', 'FORGE', 'JOINTS'];
  const chainQuantityArr = ['100X', '50/50'];

  const getChainType = (type) => {
    setChainType(chainTypeArr[type]);
  };

  const getChainQuantity = (quantity) => {
    setChainQuantity(chainQuantityArr[quantity]);
  };
  return (
    <>
      <Content></Content>

      <Group>
        <CompWrapper>
          <DropDown data={chainTypeArr} getItem={getChainType} />
          <DropDown data={chainQuantityArr} getItem={getChainQuantity} />
        </CompWrapper>

        <CompWrapper>
          {cards[chainType][chainQuantity] &&
            cards[chainType][chainQuantity].map((value, index) => (
              <Card
                key={index}
                itemKey={index}
                chainLogo={cards[chainType].chainLogo}
                quantity={value.quantity}
                image={value.image}
                {...props}
                // isLessMode={isLessMode}
                // setIsLessMode={setIsLessMode}
                // handleClickInModal={handleClickInModal}
                // btnDataOfCard={btnDataOfCard}
              />
            ))}
          {cards[chainType][chainQuantity].length === 0 && <Spin />}
        </CompWrapper>

        <H3>Open Responsibly</H3>

        <ItemGroup>
          <CompWrapper>
            {items &&
              items.map((value, index) => (
                <Item
                  key={index}
                  won={value.won}
                  time={value.time}
                  image={value.image}
                  opened={value.opened}
                  signature={value.signature}
                  token_type={value.token_type}
                />
              ))}
          </CompWrapper>
        </ItemGroup>
      </Group>
    </>
  );
};

export default HomePage;
