import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_DEVTEST_LABS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DevTest_Labs.svg;',
  _width: 50,
  _height: 50,
}

export function AzureDevtestLabs(props: DiagramNodeProps) {
  return <Shape {...AZURE_DEVTEST_LABS} {...props} />
}
