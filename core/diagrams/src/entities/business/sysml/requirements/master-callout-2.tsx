import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MASTER_CALLOUT_2 = {
  _style: {
    entity: 'endArrow=none;html=1;edgeStyle=none;dashed=1;',
  },
  _width: 2,
  _height: 60,
}

export function MasterCallout2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MASTER_CALLOUT_2}
      {...props}
      _style={extendStyle(MASTER_CALLOUT_2, props)}
    />
  )
}
