import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_PLUGIN_FOR_ORACLE_RMAN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_plugin_for_oracle_rman;',
  },
  _width: 34,
  _height: 34,
}

export function VeeamPluginForOracleRman(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_PLUGIN_FOR_ORACLE_RMAN}
      {...props}
      _style={extendStyle(VEEAM_PLUGIN_FOR_ORACLE_RMAN, props)}
    />
  )
}
