//
//  Mapview.swift
//  Pet project
//
//  Created by Nicholas Ong on 6/1/21.
//

import SwiftUI
import MapKit



struct Mapview: View {
    @State private var region = MKCoordinateRegion (center: CLLocationCoordinate2D(latitude: 34.011_286, longitude: -116.166_868),
        span: MKCoordinateSpan(latitudeDelta: 0.2, longitudeDelta: 0.2))
        
    
    var body: some View {
        Map(coordinateRegion: $region)
    }
}


struct Mapview_Previews: PreviewProvider {
    static var previews: some View {
        Mapview()
    }
}
