import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_REPUTATION_FILTERING_DCS = {
  _style: {
    entity:
      'fillColor=#28A8E0;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.web_reputation_filtering_dcs;',
  },
  _width: 43,
  _height: 43,
}

export function WebReputationFilteringDcs(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_REPUTATION_FILTERING_DCS}
      {...props}
      _style={extendStyle(WEB_REPUTATION_FILTERING_DCS, props)}
    />
  )
}
