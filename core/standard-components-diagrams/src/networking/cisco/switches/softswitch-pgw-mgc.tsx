import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOFTSWITCH_PGW_MGC = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.softswitch_pgw_mgc;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 56,
  _height: 64,
}

export function SoftswitchPgwMgc(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOFTSWITCH_PGW_MGC}
      {...props}
      _style={extendStyle(SOFTSWITCH_PGW_MGC, props)}
    />
  )
}
