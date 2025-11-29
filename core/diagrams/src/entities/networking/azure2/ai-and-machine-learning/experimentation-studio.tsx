import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPERIMENTATION_STUDIO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_Experimentation_Studio.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.00000000000001,
}

export function ExperimentationStudio(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, EXPERIMENTATION_STUDIO)} />
  )
}
