import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MASTER_CALLOUT_2 = {
  _style: {
    entity: 'endArrow=none;html=1;edgeStyle=none;dashed=1;',
  },
  _original_width: 2,
  _original_height: 60,
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
