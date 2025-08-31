import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINK = {
  _style:
    'shape=rectangle;strokeColor=none;fillColor=none;linkText=;fontSize=17;fontColor=#0000ff;fontStyle=4;html=1;align=center;',
  _width: 150,
  _height: 30,
}

export function Link(props: DiagramNodeProps) {
  return <Shape {...LINK} {...props} _style={extendStyle(LINK, props)} />
}
