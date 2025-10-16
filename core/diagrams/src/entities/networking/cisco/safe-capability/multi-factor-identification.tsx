import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_FACTOR_IDENTIFICATION = {
  _style: {
    entity:
      'fillColor=#28A8E0;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.multi_factor_identification;',
  },
  _original_width: 43,
  _original_height: 43,
}

export function MultiFactorIdentification(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_FACTOR_IDENTIFICATION}
      {...props}
      _style={extendStyle(MULTI_FACTOR_IDENTIFICATION, props)}
    />
  )
}
