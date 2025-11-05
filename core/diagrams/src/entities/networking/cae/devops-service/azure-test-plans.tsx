import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_TEST_PLANS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Test_Plans.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function AzureTestPlans(props: NodeProps) {
  return (
    <Shape
      {...AZURE_TEST_PLANS}
      {...props}
      _style={extendStyle(AZURE_TEST_PLANS, props)}
    />
  )
}
