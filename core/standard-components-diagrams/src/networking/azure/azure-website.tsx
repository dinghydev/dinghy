import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_WEBSITE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.azure_website;pointerEvents=1;',
  },
  _width: 60,
  _height: 60,
}

export function AzureWebsite(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_WEBSITE}
      {...props}
      _style={extendStyle(AZURE_WEBSITE, props)}
    />
  )
}
