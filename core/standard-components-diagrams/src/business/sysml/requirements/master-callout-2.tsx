import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MASTER_CALLOUT_2 = {
  _style: 'endArrow=none;html=1;edgeStyle=none;dashed=1;',
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
