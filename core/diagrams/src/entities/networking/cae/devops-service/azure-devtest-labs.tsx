import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_DEVTEST_LABS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DevTest_Labs.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureDevtestLabs(props: NodeProps) {
  return (
    <Shape
      {...AZURE_DEVTEST_LABS}
      {...props}
      _style={extendStyle(AZURE_DEVTEST_LABS, props)}
    />
  )
}
