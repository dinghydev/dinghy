import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVITY_PROCESS_ENTITY_EXTERNAL_INTERACTOR = {
  _style: {
    entity: 'html=1;dashed=0;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 50,
}

export function ActivityProcessEntityExternalInteractor(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ACTIVITY_PROCESS_ENTITY_EXTERNAL_INTERACTOR}
      {...props}
      _style={extendStyle(ACTIVITY_PROCESS_ENTITY_EXTERNAL_INTERACTOR, props)}
    />
  )
}
