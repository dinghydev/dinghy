import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_TERRAFORM_PROVIDER = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_terraform_provider;',
  _width: 45.73,
  _height: 50,
}

export function CitrixTerraformProvider(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_TERRAFORM_PROVIDER}
      {...props}
      _style={extendStyle(CITRIX_TERRAFORM_PROVIDER, props)}
    />
  )
}
