import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COREGION_3 = {
  _style: {
    entity: 'edgeStyle=none;html=1;dashed=1;endArrow=none;rounded=0;',
  },
  _original_width: 4,
  _original_height: 220,
}

export function Coregion3(props: DiagramNodeProps) {
  return (
    <Shape {...COREGION_3} {...props} _style={extendStyle(COREGION_3, props)} />
  )
}
