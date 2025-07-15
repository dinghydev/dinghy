import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_ALERT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_alert;',
  _width: 50,
  _height: 42.5,
}

export function AzureAlert(props: DiagramNodeProps) {
  return <Shape {...AZURE_ALERT} {...props} />
}
