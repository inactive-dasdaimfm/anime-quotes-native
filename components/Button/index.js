import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    background-color: transparent;
    border: 1px solid #41EAD4;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export default Button;