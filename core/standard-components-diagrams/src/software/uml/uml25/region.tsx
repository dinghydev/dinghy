import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REGION = {
  _style: {
    entity:
      'line;strokeWidth=1;direction=south;html=1;dashed=1;dashPattern=20 20;',
  },
  _width: 0,
  _height: 100,
}

export function Region(props: DiagramNodeProps) {
  return <Shape {...REGION} {...props} _style={extendStyle(REGION, props)} />
}
