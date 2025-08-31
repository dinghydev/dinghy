import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_RACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Cloud_Rack_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function CloudRack(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUD_RACK} {...props} _style={extendStyle(CLOUD_RACK, props)} />
  )
}
