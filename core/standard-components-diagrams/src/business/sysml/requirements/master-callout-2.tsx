import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MASTER_CALLOUT_2 = {
  _style: 'endArrow=none;html=1;edgeStyle=none;dashed=1;',
  _width: 2,
  _height: 60,
}

export function MasterCallout2(props: DiagramNodeProps) {
  return <Shape {...MASTER_CALLOUT_2} {...props} />
}
