import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DAAS_MONITOR = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.daas_monitor;',
  },
  _width: 50,
  _height: 39.22,
}

export function DaasMonitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...DAAS_MONITOR}
      {...props}
      _style={extendStyle(DAAS_MONITOR, props)}
    />
  )
}
