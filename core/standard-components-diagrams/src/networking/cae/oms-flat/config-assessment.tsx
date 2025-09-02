import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONFIG_ASSESSMENT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.config_assessment',
  },
  _original_width: 50,
  _original_height: 45,
}

export function ConfigAssessment(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONFIG_ASSESSMENT}
      {...props}
      _style={extendStyle(CONFIG_ASSESSMENT, props)}
    />
  )
}
