<script>
import {h} from 'vue'

function Heading(props, context) {
    console.log('context', context);
    return h(`h${props.level}`, context.attrs, context.slots)
}
export default Heading
</script>