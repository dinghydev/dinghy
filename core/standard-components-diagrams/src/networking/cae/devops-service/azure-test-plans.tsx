import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_TEST_PLANS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Test_Plans.svg;strokeColor=none;',
  _width: 45,
  _height: 50,
}

export function AzureTestPlans(props: DiagramNodeProps) {
  return <Shape {...AZURE_TEST_PLANS} {...props} />
}
