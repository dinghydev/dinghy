import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_WEBSITE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_website;pointerEvents=1;',
  _width: 50,
  _height: 50,
}

export function AzureWebsite(props: DiagramNodeProps) {
  return <Shape {...AZURE_WEBSITE} {...props} />
}
