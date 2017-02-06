/**
 * Created by Development on 1/30/2017.
 */
import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap} from 'react-google-maps'

export default (props) =>{
    return(
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} />}
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
            }
        />
    );
}