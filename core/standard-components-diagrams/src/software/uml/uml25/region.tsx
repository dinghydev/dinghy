import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REGION = {
  _style: {
    entity:
      'line;strokeWidth=1;direction=south;html=1;dashed=1;dashPattern=20 20;',
  },
  _original_width: 0,
  _original_height: 100,
}

export function Region(props: DiagramNodeProps) {
  return <Shape {...REGION} {...props} _style={extendStyle(REGION, props)} />
}
