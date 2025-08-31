import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRONT_DOOR_AND_CDN_PROFILES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Front_Doors.svg;strokeColor=none;',
  _width: 68,
  _height: 60,
}

export function FrontDoorAndCdnProfiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...FRONT_DOOR_AND_CDN_PROFILES}
      {...props}
      _style={extendStyle(FRONT_DOOR_AND_CDN_PROFILES, props)}
    />
  )
}
