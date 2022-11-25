import * as React from 'react';
import ButtonAppBar from '../Components/Header';
import ThisIsIHNN from '../Components/ThisIsIHNN';

export default function Mainpage() {
    return(
        <>
        <ButtonAppBar />
        <ThisIsIHNN/>
        {/* Struktur Beispiel */}
        {/* 
        <Box> 
            <ThisIsIHNN/>
                <Box>
                    <CreateQuestion/> 
                    <CreateGroup/>
                    <Button StartGame/>
                <Box/> 
        <Box/> */}
        </>
    );
}

