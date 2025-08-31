import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUBE = {
  _style: {
    entity:
      'shape=cube;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;darkOpacity=0.05;darkOpacity2=0.1;',
  },
  _width: 120,
  _height: 80,
}

export function Cube(props: DiagramNodeProps) {
  return <Shape {...CUBE} {...props} _style={extendStyle(CUBE, props)} />
}
