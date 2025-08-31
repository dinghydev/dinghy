import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA_SERVICE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.media_service;pointerEvents=1;',
  _width: 45,
  _height: 50,
}

export function MediaService(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIA_SERVICE}
      {...props}
      _style={extendStyle(MEDIA_SERVICE, props)}
    />
  )
}
