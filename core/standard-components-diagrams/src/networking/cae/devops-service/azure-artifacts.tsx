import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_ARTIFACTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Artifacts.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AzureArtifacts(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_ARTIFACTS}
      {...props}
      _style={extendStyle(AZURE_ARTIFACTS, props)}
    />
  )
}
