import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_DEVTEST_LABS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DevTest_Labs.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AzureDevtestLabs(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_DEVTEST_LABS}
      {...props}
      _style={extendStyle(AZURE_DEVTEST_LABS, props)}
    />
  )
}
