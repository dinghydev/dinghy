import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEDIA_OBJECT = {
  _style: {
    entity:
      'strokeColor=none;html=1;whiteSpace=wrap;fillColor=#868E96;fontColor=#DEE2E6;',
  },
  _width: 0,
  _height: 90,
}

export function MediaObject(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIA_OBJECT}
      {...props}
      _style={extendStyle(MEDIA_OBJECT, props)}
    />
  )
}
