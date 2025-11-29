import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_BOX_IMPORT_EXPORT_STORAGE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Box.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 47,
}

export function DataBoxImportExportStorage(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DATA_BOX_IMPORT_EXPORT_STORAGE)}
    />
  )
}
