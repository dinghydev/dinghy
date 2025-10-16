import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_ALERT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_alert;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function AzureAlert(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_ALERT}
      {...props}
      _style={extendStyle(AZURE_ALERT, props)}
    />
  )
}
