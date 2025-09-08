import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_PIPELINES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Pipelines.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzurePipelines(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_PIPELINES}
      {...props}
      _style={extendStyle(AZURE_PIPELINES, props)}
    />
  )
}
