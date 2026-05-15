<?php
declare(strict_types=1);

// Fastapi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FastapiMakeContext
{
    public static function call(array $ctxmap, ?FastapiContext $basectx): FastapiContext
    {
        return new FastapiContext($ctxmap, $basectx);
    }
}
