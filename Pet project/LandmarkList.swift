//
//  LandmarkList.swift
//  Pet project
//
//  Created by Nicholas Ong on 6/1/21.
//

import SwiftUI

struct LandmarkList: View {
    var body: some View {
        List{
        LandmarkRow(landmark: landmarks[0])
        LandmarkRow(landmark: landmarks[1])
        }
        
    }
}

struct LandmarkList_Previews: PreviewProvider {
    static var previews: some View {
        LandmarkList()
    }
}
